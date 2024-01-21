"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./message.module.css";

interface Message {
  sender: string;
  receiver: string;
  message: string;
}

interface UserMessagesProps {
  messageProp: Message[];
}

const UserMessages = ({ messageProp }: UserMessagesProps) => {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageRef.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messageProp]);

  return (
    <div className={`h-full overflow-y-scroll ${styles.customscroll}`}>
      {messageProp.map((msgVal, msgIndex) => (
        <>
          {msgVal.sender === "123" && (
            <div className='sender w-full p-2 inline-block'>
              <div className='relative bg-blue-200 rounded-r-md rounded-tl-md p-3 float-left lg:w-2/3 xl:w-3/4'>
                <p className='text-sm font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ante in nibh mauris cursus mattis molestie a. Cursus sit amet
                  dictum sit. Sit amet est placerat in egestas erat imperdiet
                  sed. At augue eget arcu dictum varius duis at consectetur.
                  Curabitur gravida arcu ac tortor dignissim. Tellus molestie
                  nunc non blandit massa enim nec. Adipiscing commodo elit at
                  imperdiet dui. Tellus in metus vulputate eu scelerisque felis
                  imperdiet. Eu facilisis sed odio morbi quis commodo odio
                  aenean sed. Diam maecenas ultricies mi eget mauris pharetra et
                  ultrices neque. Lacus viverra vitae congue eu. Sodales ut
                  etiam sit amet nisl purus.
                </p>
                <span className='absolute text-xs font-light bottom-2 right-2'>
                  07:04
                </span>
              </div>
            </div>
          )}
          {msgVal.sender === "890" && (
            <div className='recevier w-full p-2 inline-block'>
              <div className='relative bg-gray-200 rounded-l-md rounded-tr-md p-3 float-right lg:w-2/3 xl:w-3/4'>
                <p className='text-sm font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ante in nibh mauris cursus mattis molestie a. Cursus sit amet
                  dictum sit. Sit amet est placerat in egestas erat imperdiet
                  sed. At augue eget arcu dictum varius duis at consectetur.
                  Curabitur gravida arcu ac tortor dignissim. Tellus molestie
                  nunc non blandit massa enim nec. Adipiscing commodo elit at
                  imperdiet dui. Tellus in metus vulputate eu scelerisque felis
                  imperdiet. Eu facilisis sed odio morbi quis commodo odio
                  aenean sed. Diam maecenas ultricies mi eget mauris pharetra et
                  ultrices neque. Lacus viverra vitae congue eu. Sodales ut
                  etiam sit amet nisl purus.
                </p>
                <span className='absolute text-xs font-light bottom-2 right-2'>
                  07:04
                </span>
              </div>
            </div>
          )}
          {/* <div ref={messageRef}></div> */}
        </>
      ))}
    </div>
  );
};

export default UserMessages;
