// function withPagination(WrappedComponent) {
//     return class Component {
//         state = {
//             currentPage: 1, itemsPerPage: 10, totalItems: 0, items: [],
//         }
//
//         fetchItems({page, itemsPerPage}) {
//             console.log('page');
//             console.log(page + 1)
//             // 请求后.
//             this.state = {currentPage: page + 1, ...this.state}
//         }
//
//         handlePageChange({newPage}) {
//
//             this.fetchItems({page: newPage, itemsPerPage: 10});
//         }
//
//     }
// }
//
// const newPage = withPagination('_');
// const nextPage = new newPage();
// nextPage.handlePageChange({newPage: 1});
// nextPage.handlePageChange({newPage: 2});

// 高阶函数：封装分页逻辑.
function widthPagination(fetchItemsFunction, itemsPerPage) {
    return function (page) {
        // 获取当前页数据.
        const items = fetchItemsFunction(page, itemsPerPage);
        // 模拟计算总页数.
        // const totalItems = fetchTotalItems();
        const totalItems = 100;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        return {
            'items': items, 'currentPage': page, 'totalPages': totalPages,
        }
    }
}

// 展示组件：渲染项目列表和分页控件.
function ItemList(paginationData, onPageChange) {
    console.log("Items");
    paginationData.items.forEach(item => {
        console.log(item);
    });
    // 渲染分页控件
    console.log("\nPages:");
    for (let i = 1; i < paginationData.totalPages; i++) {
        if (i === paginationData.currentPage) {
        } else {
        }
    }
    // 模拟用户点击页面更改.
    const newPage = paginationData.currentPage < paginationData.totalPages ? paginationData.currentPage + 1 : 1;
    console.log(`Change to page:${newPage}`);
    const newPaginationData = onPageChange(newPage);
    ItemList(newPaginationData, onPageChange);
}
