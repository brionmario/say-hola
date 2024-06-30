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
      const {greeting} = sayHola.greet();
      setGreeting(greeting);
      return;
    }

    const intervalId = setInterval(() => {
      const {greeting} = sayHola.greet();
      setGreeting(greeting);
    }, interval || 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return {greeting};
};

export default useSayHola;
