import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Counter from "../components/counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// // const mapDispatchToProps = (dispatch) =>
// //   bindActionCreators(
// //     {
// //       increase,
// //       decrease,
// //     },
// //     dispatch
// //   );

// const actionObject = {
//   increase,
//   decrease,
// };

// export default connect(mapStateToProps, actionObject)(CounterContainer);
export default CounterContainer;
