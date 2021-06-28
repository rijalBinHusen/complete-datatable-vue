Vue.component("datatable", {
	props: ["datanya"],
    data () {
        return {
            startRow: 0,
            lengthRow: 5,
            nowData: null,
            currentPage: 0
        }
    },
    computed: {
        paginate () {
            return this.datanya.slice(this.startRow, this.startRow+Number(this.lengthRow))
            // console.log(this.datanya.slice(this.startRow, this.lengthRow))
        },
        totalPage () {
            return this.startRow == 0 || this.startRow == 1 ? [1,2,3] : [this.currentPage-1, this.currentPage, this.currentPage+1]
            //return  [1,2,3,4,5,6]
        //    this.datanya.length / this.lengthRow
        }
    },
    methods: {
        toThePage(num) {
            this.startRow = (num-1)*this.lengthRow
            this.currentPage = num
        }
    },
    template: `
    <div>
    <!-- pagination length -->

        <span>
        Show entries
        <select v-model="lengthRow">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
        </select>
        </span>

    <!-- End of pagination length -->

    <!-- data Table -->

        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(r, index) in paginate">
                <th scope="row">{{index+startRow+1}}</th>
                <td>{{r.dat1}}</td>
                <td>{{r.dat2}}</td>
                <td>{{r.dat3}}</td>
            </tr>
            </tbody>
        </table>
        
        <!--End of data Table -->

        <!--Pagination button -->
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>

                <!--li :class="{page-item, 'active':currentPage == p}"><a class="page-link" href="#" @click="toThePage(1)">1</a></li>
                <li class="page-item"><a class="page-link " href="#" @click="toThePage(2)">2</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="toThePage(3)">3</a></li-->

                <li :class="['page-item', currentPage == p ? 'active' : '' ]" v-for="p in totalPage">
                    <a class="page-link" @click="toThePage(p)" href="#">{{p}}</a>
                </li>

                <li class="page-item">
                    <a class="page-link active" href="#">Next</a>
                </li>
                </ul>
            </nav>
        <!--End of pagination button -->
    </div>
    `
});