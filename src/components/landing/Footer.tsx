import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FEOLOTIN MIX. Все права защищены.
          </p>
          <div className="flex space-x-4 items-center">
            <a
              href="https://t.me/feolotinsoundbot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <Icon name="Send" size={20} />
              <span className="text-sm">@feolotinsoundbot</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;