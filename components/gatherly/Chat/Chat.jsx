"use client";

// Imports
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import styles from "./Chat.module.css";
// import Image from "next/image";

// Create a Supabase client for interacting with the Supabase database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/*
Function: Chat
Description: Chat component to display chat messages and allow users to send chat messages to a chat group
*/
export default function Chat(props) {
  // Declare and initialize state variables
  const [userId, setUserId] = useState("");
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [messageOutput, setMessageOutput] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  /*
  Function: Handle Form Submission
  Description: Function to handle form submission
  */
  function handleSubmit(event) {
    event.preventDefault(); // Prevent form default behaviour (posting to itself/refreshing the page)

    // On submit, update the state with the form values (and prop values in the case of the userId)
    setUserId(props.userId);
    setLocation(event.target.chatGroup.selectedOptions[0].dataset.location);
    setInterest(event.target.chatGroup.selectedOptions[0].dataset.interest);
    setMessageOutput(event.target.messageOutput.value);
    setChatMessage(event.target.chatMessage.value);
    setIsSubmitted(true);
  }

  /*
  Function: Format Chat Message Helper Function
  Description: Function to format chat messages before they are displayed in the messageOutput textarea
  */
  function formatChatMessage(displayName, date, chatMessage) {
    return `➡️  ${displayName}     (${new Date(date).toLocaleString("en-GB", { timeZone: "Europe/London" })})\n      💬 ${chatMessage}`;
  }

  /*
  Function: Fetch Data useEffect hook on component mount
  Description: useEffect hook to fetch data from the chats table on component mount and populate the messageOutput state with the fetched data
  */
  useEffect(() => {
    // Function to fetch data from the Supabase database - chats table
    const fetchData = async () => {
      // Fetch all chat messages from the chats table, and join the profiles table to it to get the display_name for each chat message
      let { data: chats, error } = await supabase.from("chats").select(
        `*,
          profiles (
            display_name
          )`
      );
      /* 
      .eq("location", "shire")
      .eq("interest", "sky-diving");
      */

      if (error) {
        console.error("Error fetching chats:", error);
      } else {
        // Update the messageOutput state with fetched chats
        setMessageOutput(
          chats
            .map(
              (chat) =>
                `${formatChatMessage(chat.profiles.display_name, chat.created_at, chat.chat_message)}`
            )
            .join("\n\n")
        );
      }
    };
    // Call the fetchData function to fetch data from the database
    fetchData();
  }, []);

  /*
  Function: Real-time Subscription useEffect hook
  Description:
  useEffect hook to set up real-time subscription to the chats table and populate the messageOutput state with new messages
  So, it listens for new chat messages inserted into the chats table and updates the messageOutput state with the new chat message and the user's display_name
  */
  useEffect(() => {
    const channels = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chats" },
        async (payload) => {
          // Extract the user_id from the inserted chat row
          const userId = payload.new.user_id;

          // Query the profiles table to get the display_name for the user_id
          const { data, error } = await supabase
            .from("profiles")
            .select("display_name")
            .eq("user_id", userId)
            .single(); // Assuming user_id is unique

          if (error) {
            console.error("Error fetching display_name:", error);
          } else {
            const displayName = data.display_name;

            // Update the messageOutput state with the new chat message and the user's display_name
            setMessageOutput(
              (prevMessageOutput) =>
                `${prevMessageOutput}\n\n${formatChatMessage(displayName, payload.new.created_at, payload.new.chat_message)}`
            );
          }
        }
      )
      .subscribe();

    // Cleanup subscription on component unmount
    return () => {
      supabase.removeChannel(channels);
    };
  }, []);

  /*
  Function: Form Submission useEffect hook
  Description:
  useEffect hook that runs when the form is submitted and isSubmitted state is set to true.
  So, it inserts the new chat message into the chats table and resets the isSubmitted state.
  */
  useEffect(() => {
    if (isSubmitted) {
      // Perform actions when the form is submitted

      // Function to insert new chat messages into the Supabase database - chats table.
      const insertData = async () => {
        // let { data: chats, error } = await supabase.from("chats").select("*"); // Original GET test code as copied from our Supabase API docs
        const { error } = await supabase
          .from("chats")
          .insert([
            {
              user_id: userId,
              location: location,
              interest: interest,
              chat_message: chatMessage,
            },
          ])
          .select();

        if (error) {
          console.error("Error fetching chats:", error);
        }
      };

      // Call the insertData function to insert the new chat message into the database
      insertData();

      // Reset the isSubmitted state
      setIsSubmitted(false);

      // Clear the chat message input field after the form is submitted
      setChatMessage("");
      document.getElementById("chatMessage").value = "";
    }
  }, [isSubmitted, userId, location, interest, chatMessage]);

  /*
  Function: Scroll to the bottom of the messageOutput useEffect hook
  Description: useEffect hook to scroll the messageOutput textarea to the bottom when new messages are added, either by fetching or submitting new messages
  */
  useEffect(() => {
    const messageOutput = document.getElementById("messageOutput");
    messageOutput.scrollTop = messageOutput.scrollHeight;
  }, [messageOutput]);

  /*
  Return: Chat component JSX
  */
  return (
    <div className={styles.chatContainer}>
      <section className={styles.chatSection}>
        <h1 className={styles.title}>Chat</h1>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className={styles.chatForm}
        >
          <div>
            <label htmlFor="chatGroup">Chat Group</label>
            <select
              name="chatGroup"
              id="chatGroup"
              className={styles.chatGroupSelect}
            >
              <option data-location="shire" data-interest="sky-diving">
                The Shire - Sky-diving
              </option>
              <option data-location="shire" data-interest="book-clubs">
                The Shire - Book Clubs
              </option>
              <option data-location="shire" data-interest="volunteering">
                The Shire - Volunteering
              </option>
              <option data-location="shire" data-interest="knitting">
                The Shire - Knitting
              </option>
              <option data-location="shire" data-interest="gardening">
                The Shire - Gardening
              </option>
              <option data-location="shire" data-interest="mentoring">
                The Shire - Mentoring
              </option>
            </select>
          </div>
          <p>
            <label htmlFor="messageOutput">Group Messages</label>
          </p>
          <textarea
            id="messageOutput"
            name="messageOutput"
            className={styles.messageOutput}
            value={messageOutput}
            readOnly
          ></textarea>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="chatMessage"
              name="chatMessage"
              placeholder="Message"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              required
              className={styles.inputField}
              autoFocus
            />
            <button type="submit" className={styles.sendButton}>
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
