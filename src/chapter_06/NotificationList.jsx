import React from "react";
import Notification from "./Notification";

// 미리 만들어둔 알림 배열, reservedNotifications
const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;

// NotificationList 클래스 컴포넌트 - Notification을 목록형태로 보여주기 위함
class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [], // 생성자에서 state 초기화, notifications 라는 빈 배열
    };
  }

  // componentDidMount()
  // - JS의 setInterval()을 사용해, 1초마다 정해진 작업 수행
  // - 작업 : reservedNotification로부터 알림 배열을 가져와 state를 update
  componentDidMount() {
    const { notifications } = this.state;

    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications, // state를 update하려면, setState함수 사용 !!
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
