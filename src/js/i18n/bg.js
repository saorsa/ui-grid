/**
 * Created by Andrey on 1/10/16.
 */
(function () {
  angular.module('ui.grid').config(['$provide', function($provide) {
    $provide.decorator('i18nService', ['$delegate', function($delegate) {
      $delegate.add('bg', {
        headerCell: {
          aria: {
            defaultFilterLabel: 'Филтър',
            removeFilter: 'Премахни Филтър',
            columnMenuButtonLabel: 'Меню на колона'
          },
          priority: 'Приоритет:',
          filterLabel: "Филтър за колона: "
        },
        aggregate: {
          label: 'артикула'
        },
        groupPanel: {
          description: 'Изтеглете заглавие на колона тук, за да групирате по тази колона.'
        },
        search: {
          placeholder: 'Търсене...',
          showingItems: 'Показване на артикули:',
          selectedItems: 'Избрани артикули:',
          totalItems: 'Общо артикули:',
          size: 'Размер на Страница:',
          first: 'Първа Страница',
          next: 'Следваща Страница',
          previous: 'Предишна Страница',
          last: 'Последна Страница'
        },
        menu: {
          text: 'Изберете колони:'
        },
        sort: {
          ascending: 'Възходящо сортиране',
          descending: 'Низходящо сортиране',
          none: 'Не сортирай',
          remove: 'Спиране на сортиране'
        },
        column: {
          hide: 'Скрий колона'
        },
        aggregation: {
          count: 'общо редове: ',
          sum: 'общо: ',
          avg: 'средно: ',
          min: 'минимално: ',
          max: 'максимално: '
        },
        pinning: {
          pinLeft: 'Прикрепи Отляво',
          pinRight: 'Прикрепи Отдясно',
          unpin: 'Не прикрепяй'
        },
        columnMenu: {
          close: 'Затвори'
        },
        gridMenu: {
          aria: {
            buttonLabel: 'Таблично меню'
          },
          columns: 'Колони:',
          importerTitle: 'Импортирай файл',
          exporterAllAsCsv: 'Експортирай всичко като csv',
          exporterVisibleAsCsv: 'Експортирай видимото като csv',
          exporterSelectedAsCsv: 'Експортирай избраното csv',
          exporterAllAsPdf: 'Експортирай всичко като pdf',
          exporterVisibleAsPdf: 'Експортирай видимото като pdf',
          exporterSelectedAsPdf: 'Експортирай избраното като pdf',
          clearAllFilters: 'Изчисти филтрите'
        },
        importer: {
          noHeaders: 'Имената на колоните не бяха извлечени. Този файл има ли заглавия?',
          noObjects: 'Обектите не бяха извлечени, имаше ли данни във файла освен заглавията?',
          invalidCsv: 'Файлът не бе обработен, дали е с валиден CSV формат?',
          invalidJson: 'Файлът не бе обработен, дали е с валиден Json формат?',
          jsonNotArray: 'Импортираният JSON файл трябва да съдържа масив. Операцията прекъсната.'
        },
        pagination: {
          aria: {
            pageToFirst: 'Първа страница',
            pageBack: 'Страница назад',
            pageSelected: 'Избрана страница',
            pageForward: 'Страница напред',
            pageToLast: 'Последна страница'
          },
          sizes: 'артикула на страница',
          totalItems: 'артикула',
          through: 'из',
          of: 'от'
        },
        grouping: {
          group: 'Групирай',
          ungroup: 'Разгрупирай',
          aggregate_count: 'Агр.: Брой',
          aggregate_sum: 'Агр.: Сума',
          aggregate_max: 'Агр.: Макс.',
          aggregate_min: 'Агр.: Мин.',
          aggregate_avg: 'Агр.: Ср.',
          aggregate_remove: 'Агр: Премахване'
        }
      });
      return $delegate;
    }]);
  }]);
})();
