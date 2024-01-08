import React from 'react';
import { nanoid } from '@/lib/utils';
import BotCard from '../components/BotCard';
import bots from '../bots';
import { Chat } from '@/components/chat';

export default function IndexPage() {
  const id = nanoid();

  return (
    <div>
      <Chat id={id} />
      <h1>My Custom GPT Creations</h1>
      <h2>Take a look at our featured creations</h2>
      {bots.map((bot, index) => <BotCard key={index} bot={bot} />)}
    </div>
  );
}
