/**
 * TodoCreateTemplate
 *
 * @package components
 */
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useTodoContext } from "../../../contexts/TodoContext";
import { BaseLayout } from "../../organisms/BaseLayout";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CommonButton } from "../../atoms/CommonButton";
import { NAVIGATION_LIST } from "../../../constants/navigations";

/**
 * TodoCreateTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoCreateTemplate = () => {
  const navigate = useNavigate();
  const { addTodo } = useTodoContext();
  /* local state */
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  /**
   * 「title」変更処理
   * @type {function(*): void}
   */
  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  /**
   * 「content」変更処理
   * @type {function(*): void}
   */
  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  /**
   * Todo追加処理
   * @type {(function(*): void)|*}
   */
  const handleCreateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== "" && inputContent !== "") {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_LIST.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  return (
    <BaseLayout title={"Create Todo"}>
      <form className={styles.container} onClick={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm
            value={inputTitle}
            placeholder={"Title"}
            onChange={handleChangeTitle}
          />
        </div>
        <div className={styles.area}>
          <TextArea
            value={inputContent}
            placeholder={"Content"}
            onChange={handleChangeContent}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" label="Create Todo" />
        </div>
      </form>
    </BaseLayout>
  );
};
