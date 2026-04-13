const ContactSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-12 text-center">
        <h3 className="mb-2 text-2xl font-medium text-gray-500 italic">Let's work together!</h3>
        <p className="text-4xl font-bold">함께 성장할 수 있는 기회를 기다립니다.</p>
      </div>

      <div className="w-full max-w-md space-y-6">
        <a
          href="mailto:example@email.com"
          className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-6 transition-transform hover:scale-105">
          <span className="font-bold text-gray-400">Email</span>
          <span className="text-lg font-medium">seowon@example.com</span>
        </a>
        <a
          href="https://github.com/seowon"
          target="_blank"
          className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-6 transition-transform hover:scale-105">
          <span className="font-bold text-gray-400">Github</span>
          <span className="text-lg font-medium">github.com/seowon</span>
        </a>
      </div>

      <p className="mt-20 text-sm text-gray-400">© 2026 Seowon Chang. All rights reserved.</p>
    </div>
  );
};

export default ContactSection;
