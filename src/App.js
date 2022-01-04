import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import JobDetails from "./pages/JobSection/Jobs/JobDetails";
import Jobs from "./pages/JobSection/Jobs/Jobs";
import Quiz from "./pages/Quiz/Quiz";
import QuizHome from "./pages/QuizHome/QuizHome";
import Result from "./pages/Result/Result";
import NavigationBar from "./pages/shared/NavigationBar/NavigationBar";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/jobs">
            <Jobs />
          </Route>

          <Route path="/jobDetails">
            <JobDetails />
          </Route>

          <Route path="/quizSection">
            <QuizHome
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>

          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>

          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
