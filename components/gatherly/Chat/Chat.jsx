"use client";

// Imports
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import styles from "./Chat.module.css";
// import Image from "next/image";

// Create a Supabase client for interacting with the Supabase database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
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
  Function: Fetch Data useEffect hook on component mount
  Description: useEffect hook to fetch data from the chats table on component mount and populate the messageOutput state with the fetched data
  */
  useEffect(() => {
    const fetchData = async () => {
      let { data: chats, error } = await supabase.from("chats").select("*");
      // .eq("location", location)
      // .eq("interest", interest);

      if (error) {
        console.error("Error fetching chats:", error);
      } else {
        // Update the messageOutput state with fetched chats
        setMessageOutput(
          chats
            .map((chat) => `${chat.user_id}\n${chat.chat_message}`)
            .join("\n\n"),
        );
      }
    };

    fetchData();
  }, []);

  /*
  Function: Real-time Subscription useEffect hook
  Description: useEffect hook to set up real-time subscription to the chats table and populate the messageOutput state with new messages
  */
  useEffect(() => {
    const channels = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chats" },
        (payload) => {
          // Update the messageOutput state with the new chat message
          setMessageOutput(
            (prevMessageOutput) =>
              prevMessageOutput +
              "\n\n" +
              payload.new.user_id +
              "\n" +
              payload.new.chat_message,
          );
        },
      )
      .subscribe();

    // Cleanup subscription on component unmount
    return () => {
      supabase.removeChannel(channels);
    };
  }, []);

  /*
  Function: Form Submission useEffect hook
  Description: useEffect hook that runs when the form is submitted and isSubmitted state is set to true
  */
  useEffect(() => {
    if (isSubmitted) {
      // Perform actions when the form is submitted

      // Function to insert new chat messages into the Supabase database - chats table.
      const fetchData = async () => {
        try {
          // let { data: chats, error } = await supabase.from("chats").select("*"); // Original GET test code as copied from our Supabase API docs
          const {} = await supabase
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
        } catch (error) {
          console.error("Error fetching chats:", error);
        }
      };

      // Call the fetchData function to insert the new chat message into the database
      fetchData();

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
    <>
      <section>
        <h1 className={styles.title}>Chat</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label htmlFor="chatGroup">Chat Group </label>
            <select name="chatGroup" id="chatGroup">
              <option data-location="shire" data-interest="book-clubs">
                The Shire - Book Clubs
              </option>
              <option data-location="shire" data-interest="volunteering">
                The Shire - Volunteering
              </option>
              <option data-location="shire" data-interest="sky-diving">
                The Shire - Sky-diving
              </option>
              <option data-location="shire" data-interest="crypto">
                The Shire - Crypto
              </option>
            </select>
          </div>
          <br />
          <p>
            <label htmlFor="messageOutput">Group Messages</label>
          </p>
          <textarea
            id="messageOutput"
            name="messageOutput"
            rows="11"
            cols="28"
            value={messageOutput}
            readOnly
          ></textarea>

          <div>
            <br />
            <input
              type="text"
              id="chatMessage"
              name="chatMessage"
              placeholder="Message"
              required
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
    </>
  );
}
