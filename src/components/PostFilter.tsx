import React, { FC } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export type SortOption = "body" | "title" | "";

export interface FilterOption {
  sort: SortOption;
  query: string;
}

export interface PostFilterProps {
  filter: FilterOption;
  setFilter(filterProps: FilterOption): void;
}
const PostFilter: FC<PostFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Пошук..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort as SortOption })
        }
        defaultValue="Сортування за"
        options={[
          { value: "title", name: "За назвою" },
          { value: "body", name: "За описом" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
