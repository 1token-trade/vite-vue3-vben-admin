import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: LAYOUT,
  redirect: '/comp/basic',
  meta: {
    orderNo: 30,
    icon: 'ion:layers-outline',
    title: t('routes.demo.comp.comp'),
  },
  children: [
    {
      path: 'vxeTable',
      name: 'VxeTableDemo',
      component: () => import('/@/views/demo/vxe-table/VxeTable.vue'),
      meta: {
        title: t('routes.demo.table.vxeTable'),
      },
    },
  ],
};

export default comp;
