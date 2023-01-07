export default function PostTitle({ children }) {
  return (
    <h1
      className="text-3xl md:text-4xl mb-12 text-center md:text-left text-[#343a40]"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
