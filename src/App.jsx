import { Notifications } from "./stories/Notifications/Notifications";

const data = [

  {
    id: 1,
    notificationContent: "You have a new message",
    dateTime: "2024-05-06 10:30 AM",
  },
  {
    id: 2,
    notificationContent: "New friend request",
    dateTime: "2024-05-05 3:45 PM",
  },
  {
    id: 3,
    notificationContent: "Your post has been liked",
    dateTime: "2024-05-04 9:15 AM",
  },
]

const App = () => {
  return (
  <Notifications data={data} icon="o"/>
  );
};

export default App;

{
  /* <If condition={input === "email"}>
<Loading>
<div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
</Loading>
<Then>
<InputField type="email" placeholder="enter email" label="Email"/>
</Then>

<Else>
<InputField type="textarea" placeholder="enter content" label="Post"/>
</Else>
</If> */
}
