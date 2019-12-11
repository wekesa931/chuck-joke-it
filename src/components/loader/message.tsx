import { message } from 'antd';

export const success = (text: string) => {
  const hide = message.loading(`Searching for "${text}" `, 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 1000);
};