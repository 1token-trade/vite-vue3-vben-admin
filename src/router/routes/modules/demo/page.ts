import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { ExceptionEnum } from '/@/enums/exceptionEnum';
import { t } from '/@/hooks/web/useI18n';

const ExceptionPage = () => import('/@/views/sys/exception/Exception.vue');

const page: AppRouteModule = {
  path: '/exception',
  name: 'ExceptionPage',
  component: LAYOUT,
  redirect: '/exception/404',
  meta: {
    orderNo: 10,
    icon: 'ion:aperture-outline',
    title: t('routes.demo.page.exception'),
  },
  children: [
    {
      path: '403',
      name: 'PageNotAccess',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_ACCESS,
      },
      meta: {
        title: '403',
      },
    },
    {
      path: '404',
      name: 'PageNotFound',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_FOUND,
      },
      meta: {
        title: '404',
      },
    },
    {
      path: '500',
      name: 'ServiceError',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.ERROR,
      },
      meta: {
        title: '500',
      },
    },
    {
      path: 'net-work-error',
      name: 'NetWorkError',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.NET_WORK_ERROR,
      },
      meta: {
        title: t('routes.demo.page.netWorkError'),
      },
    },
    {
      path: 'not-data',
      name: 'NotData',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_DATA,
      },
      meta: {
        title: t('routes.demo.page.notData'),
      },
    },
  ],
};

export default page;
