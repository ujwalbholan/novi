"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Bell,
  ChevronDown,
  Hash,
  MessageCircle,
  Paperclip,
  Search,
  Send,
  Smile,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Message = {
  id: number;
  name: string;
  initials: string;
  color: string;
  text: string;
  time: string;
  reactions?: string[];
};
type Channel = {
  name: string;
  unread?: number;
  description: string;
  messages: Message[];
};

const initialChannels: Channel[] = [
  {
    name: "general",
    description: "Company-wide conversations",
    messages: [
      {
        id: 1,
        name: "Maya Liu",
        initials: "ML",
        color: "#91bca4",
        text: "Good morning, team! The launch checklist is looking really solid. What is everyone focused on today?",
        time: "9:14 AM",
        reactions: ["💚 4", "✨ 2"],
      },
      {
        id: 2,
        name: "Alex Taylor",
        initials: "AT",
        color: "#c98a2e",
        text: "I am taking the final pass on onboarding and will share the updated flow before lunch.",
        time: "9:22 AM",
        reactions: ["👍 3"],
      },
      {
        id: 3,
        name: "Jamie Ross",
        initials: "JR",
        color: "#d79a82",
        text: "I have the launch copy ready for review. Dropping it in the project thread now.",
        time: "9:36 AM",
      },
      {
        id: 4,
        name: "Maya Liu",
        initials: "ML",
        color: "#91bca4",
        text: "Perfect. Let us keep all feedback attached to the work so nothing gets lost in the scroll.",
        time: "9:41 AM",
      },
    ],
  },
  {
    name: "product-launch",
    description: "Ship something good",
    unread: 5,
    messages: [
      {
        id: 5,
        name: "Alex Taylor",
        initials: "AT",
        color: "#c98a2e",
        text: "The first beta invites are out. We have three replies already.",
        time: "Yesterday",
        reactions: ["🚀 5"],
      },
    ],
  },
  {
    name: "design",
    description: "Make it feel clear",
    messages: [
      {
        id: 6,
        name: "Jamie Ross",
        initials: "JR",
        color: "#d79a82",
        text: "The empty states are ready for a team review when you have a moment.",
        time: "Yesterday",
      },
    ],
  },
  { name: "random", description: "The water cooler", messages: [] },
];

type InboxProps = {
  activeChannel: string;
};

export function Inbox({ activeChannel }: InboxProps) {
  const [channels, setChannels] = useState(initialChannels);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [threadMessage, setThreadMessage] = useState<Message | null>(null);
  const [threadDraft, setThreadDraft] = useState("");

  const channel =
    channels.find((item) => item.name === activeChannel) ?? channels[0];
  const messages = useMemo(
    () =>
      channel.messages.filter((message) =>
        message.text.toLowerCase().includes(query.toLowerCase()),
      ),
    [channel.messages, query],
  );

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const newMessage: Message = {
      id: Date.now(),
      name: "Alex Taylor",
      initials: "AT",
      color: "#c98a2e",
      text,
      time: "now",
    };
    setChannels((current) =>
      current.map((item) =>
        item.name === activeChannel
          ? { ...item, messages: [...item.messages, newMessage] }
          : item,
      ),
    );
    setDraft("");
  };

  const sendThreadReply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!threadDraft.trim()) return;
    setThreadDraft("");
  };

  return (
    <div className="flex h-[600px] min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <header className="flex flex-wrap items-center gap-3 border border-[#e5ebe3] rounded-xl px-4 py-3 sm:px-5">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Hash size={18} className="text-[#819082]" />
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold text-[#213328]">
              {channel.name}
            </h2>
            <p className="truncate text-[10px] text-[#93a092]">
              {channel.description}
            </p>
          </div>
          <ChevronDown size={14} className="text-[#a0aca1]" />
        </div>
        <label className="relative order-3 w-full sm:order-none sm:w-44">
          <Search
            size={14}
            className="absolute left-3 top-2.5 text-[#a0aca1]"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-9 w-full rounded-lg border border-[#d9e0d6] bg-[#f8faf6] pl-9 pr-3 text-xs outline-none placeholder:text-[#a0aca1] focus:border-[#8fa996]"
            placeholder="Search channel"
            aria-label="Search channel"
          />
        </label>
        <button
          type="button"
          className="grid size-8 place-items-center rounded-md text-[#819082] hover:bg-[#eef3ec]"
          aria-label="Notifications"
        >
          <Bell size={16} />
        </button>
        <button
          type="button"
          className="grid size-8 place-items-center rounded-md text-[#819082] hover:bg-[#eef3ec]"
          aria-label="Channel members"
        >
          <Users size={16} />
        </button>
      </header>

      <div className="flex min-h-0 flex-1 ">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="h-[430px] shrink-0 space-y-1 overflow-y-auto p-4 sm:p-5">
            {messages.length ? (
              messages.map((message, index) => (
                <motion.article
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex gap-3 rounded-lg px-2 py-2 transition hover:bg-[#f7faf5]"
                >
                  <span
                    className="grid size-8 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: message.color }}
                  >
                    {message.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <strong className="text-xs font-semibold text-[#304638]">
                        {message.name}
                      </strong>
                      <span className="text-[10px] text-[#a0aca1]">
                        {message.time}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-[#536154]">
                      {message.text}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {message.reactions?.map((reaction) => (
                        <button
                          key={reaction}
                          type="button"
                          className="rounded-full border border-[#d9e6d8] bg-[#f4f8f2] px-2 py-0.5 text-[10px] text-[#536154] hover:border-[#8fa996]"
                        >
                          {reaction}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setThreadMessage(message)}
                        className="invisible inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] text-[#819082] hover:bg-[#e3eee3] group-hover:visible"
                      >
                        <MessageCircle size={12} /> Reply in thread
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="flex h-full min-h-48 flex-col items-center justify-center text-center">
                <span className="mb-3 grid size-11 place-items-center rounded-full bg-[#eef3ec] text-[#2e4a3b]">
                  <Sparkles size={18} />
                </span>
                <p className="text-sm font-medium text-[#304638]">
                  No messages found
                </p>
                <p className="mt-1 text-xs text-[#93a092]">
                  Try another search or start the conversation.
                </p>
              </div>
            )}
          </div>
          <form
            onSubmit={sendMessage}
            className="border border-[#e5ebe3] rounded-xl p-3 sm:p-4"
          >
            <div className="flex items-end gap-2 rounded-xl border border-[#cbd9ca] bg-[#fbfcfa] p-2 focus-within:border-[#6d9676] focus-within:ring-2 focus-within:ring-[#e3eee3]">
              <button
                type="button"
                className="grid size-8 shrink-0 place-items-center rounded-md text-[#819082] hover:bg-[#eef3ec]"
                aria-label="Attach file"
              >
                <Paperclip size={16} />
              </button>
              <textarea
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                rows={1}
                className="max-h-24 min-h-8 flex-1 resize-none bg-transparent px-1 py-1 text-xs text-[#304638] outline-none placeholder:text-[#a0aca1]"
                placeholder={`Message #${channel.name}`}
              />
              <button
                type="button"
                className="grid size-8 shrink-0 place-items-center rounded-md text-[#819082] hover:bg-[#eef3ec]"
                aria-label="Add emoji"
              >
                <Smile size={16} />
              </button>
              <button
                type="submit"
                disabled={!draft.trim()}
                className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#2e4a3b] text-white transition hover:bg-[#1e3327] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
            <p className="mt-2 px-1 text-[10px] text-[#a0aca1]">
              Press Enter to send · Shift + Enter for a new line
            </p>
          </form>
        </div>

        <AnimatePresence>
          {threadMessage && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="hidden shrink-0 overflow-hidden border-l border-[#e5ebe3] bg-[#fbfcfa] lg:block"
            >
              <div className="flex min-w-[280px] items-center justify-between border-b border-[#e5ebe3] px-4 py-3">
                <div>
                  <p className="text-xs font-semibold text-[#304638]">Thread</p>
                  <p className="text-[10px] text-[#93a092]">
                    {threadMessage.name}&apos;s message
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setThreadMessage(null)}
                  className="text-[#819082] hover:text-[#304638]"
                  aria-label="Close thread"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="min-w-[280px] p-4">
                <div className="rounded-lg bg-[#eef3ec] p-3">
                  <p className="text-[11px] leading-5 text-[#536154]">
                    {threadMessage.text}
                  </p>
                </div>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a0aca1]">
                  2 replies
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex gap-2">
                    <span className="grid size-6 place-items-center rounded-full bg-[#91bca4] text-[8px] font-bold text-white">
                      ML
                    </span>
                    <p className="text-[11px] leading-5 text-[#536154]">
                      <strong className="text-[#304638]">Maya</strong>
                      <br />
                      Love this direction. I will take a look shortly.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="grid size-6 place-items-center rounded-full bg-[#c98a2e] text-[8px] font-bold text-white">
                      AT
                    </span>
                    <p className="text-[11px] leading-5 text-[#536154]">
                      <strong className="text-[#304638]">Alex</strong>
                      <br />
                      Thanks, adding it to the launch notes.
                    </p>
                  </div>
                </div>
              </div>
              <form
                onSubmit={sendThreadReply}
                className="mt-auto flex min-w-[280px] gap-2 border-t border-[#e5ebe3] p-3"
              >
                <input
                  value={threadDraft}
                  onChange={(event) => setThreadDraft(event.target.value)}
                  className="min-w-0 flex-1 rounded-md border border-[#d9e0d6] bg-white px-2 py-2 text-[11px] outline-none focus:border-[#8fa996]"
                  placeholder="Reply..."
                />
                <button
                  type="submit"
                  className="grid size-8 shrink-0 place-items-center rounded-md bg-[#2e4a3b] text-white"
                  aria-label="Send thread reply"
                >
                  <Send size={13} />
                </button>
              </form>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
