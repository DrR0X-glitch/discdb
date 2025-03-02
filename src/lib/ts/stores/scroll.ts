import { writable } from 'svelte/store';

export const notAtTheVeryTop = writable(false);

export const updateScroll = () => {
  if (window.scrollY > 5) {
    notAtTheVeryTop.set(true);
  } else {
    notAtTheVeryTop.set(false);
  }
};
