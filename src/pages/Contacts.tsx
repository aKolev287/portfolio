import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import { FaRegPaperPlane } from "react-icons/fa6";
import { Bot } from "grammy";
import { telegramBotAPI, telegramChatID } from "../config/telegramBot";

const Contacts = () => {
  const [message, setMessage] = useState("");
  const [isCooldown, setIsCooldown] = useState(false);
  const cooldownDuration = 10000;

  const bot = new Bot(telegramBotAPI);

  bot.command("start", (ctx) => ctx.reply("Hello!"));

  const sendMessage = () => {
    if (!isCooldown) {
      bot.api.sendMessage(telegramChatID, message);
      setMessage("");
      setIsCooldown(true);
    }
  };

  useEffect(() => {
    const cooldownTimer = setTimeout(() => {
      setIsCooldown(false);
    }, cooldownDuration);

    return () => clearTimeout(cooldownTimer);
  }, [isCooldown]);

  return (
    <div className="min-h-full max-w-[57.5rem] max-sm:mx-4">
      <div className="flex flex-row gap-3 items-baseline">
        <FaRegPaperPlane size={28} />
        <h3 className="font-roboto text-4xl mb-3 font-extrabold">Contact</h3>
      </div>
      <div>
        <p className=" font-roboto text-xl mb-3 text-gray-800 dark:text-gray-300 ">
          You're welcome to drop me a quick message for just about anything.
          Your message will be automatically sent to my Telegram bot.
        </p>
        <textarea
          className="bg-gray-200 p-3 font-roboto text-xl border-2 rounded-xl dark:bg-[#141414] dark:border-gray-600 w-full"
          name="message"
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id=""
        ></textarea>
      </div>
      <button
        onClick={sendMessage}
        className="bg-blue-600 text-gray-100 px-6 py-2 border-2 border-blue-600 rounded-full font-roboto font-bold my-3 hover:bg-blue-700 hover:border-blue-700 disabled:bg-blue-900 disabled:border-blue-900 disabled:text-gray-300"
        disabled={isCooldown}
      >
        {isCooldown ? `Cooldown...` : `Send`}
      </button>
    </div>
  );
};

export default Contacts;
