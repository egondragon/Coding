import React from 'react';
import { Message } from "../typings";
import Image from "next/image";
import { useSession } from "next-auth/react";
import TimeAgo from "react-timeago";

type Props = {
    message: Message;
};

function MessageComponent ({message}: Props) {
    const { data: session } = useSession();
    const isUser = session?.user?.email === message.email;

    return (
        <div className={`flex w-fit ${isUser && "ml-auto"}`}>
            <div className={`flex-shrink-0 ${isUser && 'order-2'}`}>
                <Image 
                    className="rounded-full mx-2"
                    height={10}
                    width={50}
                    src="https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-1/453313380_2906709866153374_7844539056940715745_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=sTqY2zZmQXcQ7kNvgHpiWRQ&_nc_ht=scontent-cdg4-3.xx&oh=00_AYAJwjUFg1jzW5BxLQYqbUEN8aQ2ZYUd5VUbsbKclITGQw&oe=66AAD66E"
                    alt="Profile Picture"
                />
            </div>

            <div>
                <p 
                    className={`text-[0.65rem] px-[2px] pb-[2px]
                    ${isUser ? "text-blue-400 text-right" : "text-red-400 text-left"}`}
                >
                    { message.username}
                </p>

                <div className="flex items-end">
                    <div className={`px-3 py-2 rounded-lg w-fit text-white 
                        ${isUser ? "bg-blue-400 ml-auto order-2" : "bg-red-400"}`}
                    >
                        <p> {message.message} </p>
                    </div>

                    <p className={`text-[0.65rem] italic px-2 text-gray-300 ${
                        isUser ? "text-blue-400 text-right" : "test-red-400 text-left"
                    }`}>
                        <TimeAgo date={new Date(message.created_at)} />
                        {new Date(message.created_at).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MessageComponent;
