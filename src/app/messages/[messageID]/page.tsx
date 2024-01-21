import SingleMessagesContainer from '@/components/Messages/SingleMessagesContainer';

export default function Message({
	params: { messageID },
}: {
	params: { messageID: number };
}) {
	return <SingleMessagesContainer messageID={messageID} />;
}
