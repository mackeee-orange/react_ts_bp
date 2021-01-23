import React, { FC, useCallback } from "react";
import Search, { SearchProps } from "../Search";
import Account from "data/account";
import AccountRequest from "data/account/accountRequest";

type Props = Partial<SearchProps<Account>>;

const CompanySearch: FC<Props> = props => {
  const multi = props.multiple || true;
  const onSearch = useCallback<(w: string) => Promise<Account[]>>(async word => {
    const res = await new AccountRequest.Search().call({
      qParams: {
        keyword: word
      }
    });
    return res.accounts;
  }, []);

  return (
    <Search<Account>
      name={multi ? "accountIds" : "accountId"}
      labelKey="name"
      onSearch={onSearch}
      {...props}
    />
  );
};

export default CompanySearch;
