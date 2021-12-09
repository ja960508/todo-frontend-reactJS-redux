# todo APP(리덕스 사용, 리액트를 다루는 기술 참고)

## 중점 사항

- ### 기초적인 리덕스 사용법
- ### redux-actions 라이브러리 활용법
<br />

---

<br />
이번 실습은 조금 어려웠습니다. 여전히 이해할 수 없는 부분들이 많습니다. 되는 걸 알지만 왜 되는지 이유를 알 수 없기 때문인가 봅니다.

이해에 관한 부분은 계속해서 참고 문헌들을 읽어보도록 하고 전체적인 측면에서 리덕스를 파악해보려고 합니다.

<br />

---

<br />

## 리덕스 기초

리덕스에서 사용하는 각종 단어들이 있습니다. Action, Store, Reducer, State, dispatch, subscribe 등등 처음 보면 감이 잘 안 잡힙니다.

<br />

### **_Action_**

상태를 변화할 때 참조하는 '객체'입니다.

<br/>

```javascript
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// counter.js 파일
```

<br/>

다음과 같은 방식으로 선언합니다. 그리고 액션 생성함수를 거쳐 사용됩니다. 보통 이름이 겹치는 경우를 막기 위해 '모듈 이름/액션 이름'의 형태를 가집니다.

<br />

### **_Reducer_**

상태변화를 일으키는 함수입니다. state와 action 두 개의 인자를 받아 새로운 상태를 반환합니다.

```javascript
const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default: {
      return state;
    }
  }
}

// counter.js 파일
```

<br/>
다음과 같이 초기상태를 선언, 그리고 리듀서 함수를 정의했습니다. 액션 객체에서 type을 확인하고 각각에 맞는 상태변화를 일으킵니다.

<br/>

### **_RootReducer_**

만약 리듀서가 여러 개라면 루트 리듀서를 만들어야 합니다. 추후 리듀서를 사용할 스토어에서는 리듀서를 하나만 사용해야 하기 때문입니다.

```javascript
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos_redux_action";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

// /module/index.js 파일
```

리덕스에서 제공하는 combineReducer 함수를 이용해 만들 수 있습니다.

<br/>

### **_store_**

스토어는 createStore 함수를 이용해서 만듭니다. 인자로 리듀서, 지금 같은 경우는 루트 리듀서를 넣어줍니다.

```javascript
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// index.js 파일
```

composeWithDevTools는 크롬 내부에서 리덕스 익스텐션을 위해 추가했습니다.

컴포넌트에서 스토어를 사용하려면 위와 같이 Provider로 감싸고 store를 props로 넣어야합니다.

이제 컴포넌트에서 리덕스를 사용할 준비가 끝났습니다.

---
