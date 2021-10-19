import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

const TodoToggleAllButton = ({ toggleAllCheck }: { toggleAllCheck: (check: boolean) => void }): React.ReactElement => {
  const [checkToggleAll, setCheckToggleAll] = useState<boolean>(false);
  const toggleAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const currentTarget = e.currentTarget as HTMLInputElement;
    // console.log(currentTarget.checked, checkToggleAll);
    setCheckToggleAll((prev) => !prev);
    toggleAllCheck(checkToggleAll);
  };

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={checkToggleAll}
        onChange={toggleAllHandler}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
};

export default observer(TodoToggleAllButton);