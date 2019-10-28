<template>
  <div id="admin-id">
    <kendo-grid :data-source="localDataSource"
                :selectable="'multiple cell'"
                :sortable="true"
                :filterable="true"
                :groupable="true"
                :pageable="true">
    </kendo-grid>
  </div>
</template>

<script>
  export default {
    name: 'admin-id',
    data() {
      return{
        localDataSource: [{
          "ProductID": 1,
          "ProductName": "Chai",
          "UnitPrice": 18,
          "UnitsInStock": 39,
          "Discontinued": false,
        },
        {
          "ProductID": 2,
          "ProductName": "Chang",
          "UnitPrice": 17,
          "UnitsInStock": 40,
          "Discontinued": false,
        },
        {
          "ProductID": 3,
          "ProductName": "Aniseed Syrup",
          "UnitPrice": 10,
          "UnitsInStock": 13,
          "Discontinued": false,
        },
        {
          "ProductID": 4,
          "ProductName": "Chef Anton's Cajun Seasoning",
          "UnitPrice": 22,
          "UnitsInStock": 53,
          "Discontinued": false,
        },
        {
          "ProductID": 5,
          "ProductName": "Chef Anton's Gumbo Mix",
          "UnitPrice": 21.35,
          "UnitsInStock": 0,
          "Discontinued": true,
        },
        {
          "ProductID": 6,
          "ProductName": "Grandma's Boysenberry Spread",
          "UnitPrice": 25,
          "UnitsInStock": 120,
          "Discontinued": false,
        }
      ]
      }
      
    },
    methods: {
        pageChangeHandler: function(event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
        },
        updatePagerState: function(key, value) {
            const newPageableState = Object.assign({}, this.pageable, { [key]: value });
            this.pageable = newPageableState;
        },
        changeHandler: function(type, value) {
            this.updatePagerState(type, value);
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
            }));
        }
    }
  }
</script>

<style scoped></style>