import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ScrollToTop } from "../hooks";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <h2>new</h2>

      {/* <Switch>
        <Route exact path={paths.trang_chu} component={Home} />
        <Route exact path={paths.ve_chung_toi} component={About} />
        <Route exact path={paths.cong_nghe} component={Technology} />
        <Route exact path={paths.tin_tuc} component={News} />
        <Route exact path={paths.lien_he} component={Contact} />
        <Route exact path={paths.tuyen_dung} component={Career} />
        <Route exact path={paths.chinh_sach} component={Policy} />
        <Route path={paths.tin_tuc_wSlug} component={NewsDetail} />
        <Route path={paths.tuyen_dung_wSlug} component={CareerDetail} />
        <Route path={paths.h247_pro} component={H247Pro} />

        <Route path="*" component={NotFound} />
      </Switch> */}
    </BrowserRouter>
  );
};

export default RootRouter;
