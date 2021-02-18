// useState
const [state, setState] = useState(initialState);
setState(newState);

//useEffect
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
