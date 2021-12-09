import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import Counter from "../components/counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch
//   );

const actionObject = {
  increase,
  decrease,
};

export default connect(mapStateToProps, actionObject)(CounterContainer);
