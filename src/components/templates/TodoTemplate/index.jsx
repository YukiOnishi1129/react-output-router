/**
 * TodoTemplate
 *
 * @package components
 */
import { Navigation } from "../../organisms/Navigation";
import { InputForm } from "../../atoms/InputForm";
import { TodoList } from "../../organisms/TodoLlist";
import { useTodoContext } from "../../../contexts/TodoContext.jsx";
import styles from "./styles.module.css";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const {
    searchKeyword,
    showTodoList,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  } = useTodoContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* リンクエリア */}
      <section className={styles.common}>
        <Navigation />
      </section>
      {/* Todo検索フォームエリア */}
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
