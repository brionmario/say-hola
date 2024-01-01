import {useEffect, useState} from 'react';
import SayHola from 'say-hola';

export interface UseSayHolaProps {
  greeting: string;
}

const useSayHola = (
  interval: number = 1000,
  staticMode: boolean = false,
): {
  greeting: string;
} => {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const sayHola = new SayHola();

    if (staticMode) {
      setGreeting(sayHola.sayHello());
      return;
    }

    const intervalId = setInterval(() => {
      setGreeting(sayHola.sayHello());
    }, interval || 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return {greeting};
};

export default useSayHola;
