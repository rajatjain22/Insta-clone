import SingleMessagesContainer from '@/components/Messages/SingleMessagesContainer';

export default function Page({
	params: { messageID },
}: {
	params: { messageID: number };
}) {
	return <SingleMessagesContainer messageID={messageID} />;
}
