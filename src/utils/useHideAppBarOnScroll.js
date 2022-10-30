/**
 * A function that can be used to hide the appbar on scroll down and to reappear it when scrolling up.
 *  
 * @param {string} appbarId - an appbar element with `{ position: sticky, top: 0 }`. You can also add a `transition` for better result.
 * @param {string} topOffset - position that hides the appbar.
 */
const useHideAppBarOnScroll = (appbarId, topOffset) => {
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const appbar = document.getElementById(appbarId);

    /**
     * If scrolls down, hide the appbar. Otherwise, reappear.
     */
    if (prevScrollpos < currentScrollPos) {
      appbar.style.top = topOffset;
    } else {
      appbar.style.top = "0px";
    }

    prevScrollpos = currentScrollPos;
  };
};

export default useHideAppBarOnScroll; 