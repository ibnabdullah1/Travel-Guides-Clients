import "./PostHtmlContent.css";
const PostHtmlContent = ({ content }: any) => {
  return (
    <div className="postContentContainer">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostHtmlContent;
