const EMAIL = "3mily.ang@gmail.com";

export default function Contact() {
  return (
    <div className="max-w-xl">
      <h1 className="text-[15px] font-medium">Get in touch</h1>
      <p className="mt-6 text-[15px] leading-relaxed">
        For a role, a project, or a hello — email is the direct line. It also
        sits in the bottom-left corner of every page.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-6 inline-block text-[15px] underline underline-offset-4"
      >
        {EMAIL}
      </a>
    </div>
  );
}
