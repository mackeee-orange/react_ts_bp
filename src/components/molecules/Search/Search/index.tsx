/**
 * Searchコンポーネント
 *
 * **/

import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Select as AntSelect } from "antd"; // TODO: 脱Antd

const { Option } = AntSelect;

export type SearchProps<T> = {
  name?: string;
  placeholder?: string;
  multiple?: boolean;
  size?: SizeType;
  innerRef?: ((ref: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null;
  defaultValue?: string | string[];
  required?: boolean;
  wide?: boolean;
  labelKey: string;
  type?: "incremental" | "withButton";
  onSearch?: (word: string) => Promise<T[]>;
  className?: string;
};

interface Resource {
  id: string;
  [key: string]: unknown;
}

const Search: <T>(props: SearchProps<T>) => ReactElement = ({
  name,
  placeholder,
  multiple,
  size,
  innerRef,
  defaultValue,
  required,
  wide,
  labelKey,
  type = "incremental",
  onSearch,
  className
}) => {
  const [ids, setIds] = useState<string[]>([]);
  const [data, setData] = useState<Resource[]>();

  const onAntSearch = useCallback<(word: string) => void>(word => {
    // TODO: typeを使う
    (async (w: string) => {
      if (!onSearch) return;

      setData(((await onSearch(w)) as unknown) as Resource[]); // FIXME
    })(word);
  }, []);
  const onAntSelect = useCallback<(id: string) => void>(id => {
    const index = ids.findIndex(i => i === id);
    if (index > -1) {
      // 選択中を選択したら消す
      setIds(ids.slice(index, 1));
      return;
    }

    setIds(multiple ? [...ids, id] : [id]);
  }, []);

  return (
    <div>
      <input type="hidden" name={name} ref={innerRef} value={ids} />
      <AntSelect
        mode="multiple"
        labelInValue
        value={ids}
        placeholder={placeholder}
        defaultValue={defaultValue}
        filterOption={false}
        onSearch={onAntSearch}
        onSelect={onAntSelect}
        className={className}
      >
        {/* FIXME */}
        {data?.map((d, idx) => (
          <Option key={idx} value={d.id}>
            {((d as unknown) as DictionaryLike)[labelKey] as string}
          </Option>
        ))}
      </AntSelect>
    </div>
  );
};

export default Search;
