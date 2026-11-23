import { useState } from "react";
import "./App.css";
import LessonHeader from "./components/LessonHeader";
import LessonDescription from "./components/LessonDescription";
import LessonSection from "./components/LessonSection";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [lessonStep, setLessonStep] = useState(0);

  const lessons = [
    {
      title: "Lesson 1: Introduction",
      description:
        "Welcome! Let's begin exploring the reasons for belief in God.",
    },
    {
      title: "What is an Argument?",
      description:
        "An argument is a set of statements where some statements (premises) provide support for another statement (the conclusion).",
    },
    {
      title: "Lesson 3: Logic 101",
      description:
        "Learn how logic helps us evaluate and determine whether conclusions follow from premises.",
    },
  ];
  const currentLesson = lessons[lessonStep];
  const progress = Math.round(((lessonStep + 1) / lessons.length) * 100);

  return (
    <main>
      {currentPage === "home" ? (
        <>
          <h1>Apologetics Companion</h1>
          <p>
            Think deeply. Ask questions. Explore the reasons for your faith.
          </p>
          <button type="button" onClick={() => setCurrentPage("lesson")}>
            Start Learning
          </button>
        </>
      ) : (
        <>
          <LessonSection>
            <p>
              Lesson {lessonStep + 1} of {lessons.length} ({progress}%)
            </p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <LessonHeader title={currentLesson.title} />
            <LessonDescription description={currentLesson.description} />
          </LessonSection>
          {lessonStep === lessons.length - 1 && (
            <p>You've completed the introduction!</p>
          )}
          {lessonStep > 0 && (
            <button type="button" onClick={() => setLessonStep(lessonStep - 1)}>
              Previous
            </button>
          )}

          {lessonStep < lessons.length - 1 && (
            <button type="button" onClick={() => setLessonStep(lessonStep + 1)}>
              Next
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setCurrentPage("home");
              setLessonStep(0);
            }}
          >
            Back to Home
          </button>
        </>
      )}
    </main>
  );
}

export default App;
