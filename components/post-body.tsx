import styles from "./post-body.module.css";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div
        className={`${styles.content} text-[#343a40]`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
