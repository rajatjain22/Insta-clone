"use client";

import { MdOutlineEmojiEmotions, MdSend } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";
import { useState, ChangeEvent, FormEvent } from "react";

interface SendMessageState {
  message: string;
  showEmoji: boolean;
  showModel: boolean;
  paperClipValue: { icon: React.ReactNode; name: string }[];
}

export default function SendMessage() {
  const [stateValue, setStateValue] = useState<SendMessageState>({
    message: "",
    showEmoji: false,
    showModel: false,
    paperClipValue: [
      { icon: <GoPaperclip />, name: "paperclip" },
      { icon: <GoPaperclip />, name: "paperclip" },
      { icon: <GoPaperclip />, name: "paperclip" },
      { icon: <GoPaperclip />, name: "paperclip" },
      { icon: <GoPaperclip />, name: "paperclip" },
    ],
  });

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setStateValue((prevVal) => ({ ...prevVal, message: value }));
  };

  const handleSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStateValue((prevVal) => ({ ...prevVal, message: "" }));
  };

  return (
    <>
      <div className='flex w-full items-center py-2  relative min-h-[60px]'>
        <MdOutlineEmojiEmotions
          className='hidden text-2xl md:block w-10 cursor-pointer'
          onClick={() =>
            setStateValue((presVal) => ({
              ...presVal,
              showEmoji: !presVal.showEmoji,
            }))
          }
        />
        <GoPaperclip
          className='hidden text-2xl md:block w-10 cursor-pointer'
          onClick={() =>
            setStateValue((presVal) => ({
              ...presVal,
              showModel: !presVal.showModel,
            }))
          }
        />
        <form
          className='w-full md:px-3 h-full flex justify-between items-center'
          onSubmit={handleSubmitMessage}
        >
          <input
            value={stateValue.message}
            placeholder='Enter message.....'
            className='w-full border-2 p-2 px-3 mx-2 rounded-lg text-sm focus:border-blue-500 border-blue-100 focus:outline-none'
            onChange={handleChangeMessage}
          />
          <button type='submit'>
            <MdSend className='text-2xl' />
          </button>
        </form>

        {stateValue.showEmoji && (
          <div className='absolute bottom-14 left-5'>
            {/* <Picker
						data={data}
						perLine={8}
						emojiSize={20}
						showPreview={false}
						showSkinTones={true}
						previewPosition={'none'}
						dynamicWidth={false}
						onEmojiSelect={console.log}
						/> */}
            {/* <EmojiKeyboard
              height={320}
              width={500}
              theme='light'
              searchLabel='Search emoji'
              searchDisabled={false}
              onEmojiSelect={(emoji) => console.log(emoji)}
              categoryDisabled={false}
              containerStyle={{}}
            /> */}
          </div>
        )}
      </div>
    </>
  );
}
