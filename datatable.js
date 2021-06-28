Vue.component("datatable", {
	props: ["datanya"],
    data () {
        return {
            currentPage: 0,
            endRow: 5,
            lengthRow: 5,
            nowData: null
        }
    },
    computed: {
        paginate () {
            return this.datanya.slice(this.currentPage, this.endRow)
            // console.log(this.datanya.slice(this.currentPage, this.lengthRow))
        }
    },
    methods: {
        toThePage(num) {
            this.currentPage = num
            this.endRow = num + this.lengthRow
        }
    },
    template: `
    <div>
    <!-- pagination length -->

        <span>
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
            <tr v-for="r in paginate">
                <th scope="row">{{r.id}}</th>
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
                <li class="page-item"><a class="page-link" href="#" @click="toThePage(0)">1</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="toThePage(6)">2</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="toThePage(11)">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
                </ul>
            </nav>
        <!--End of pagination button -->
    </div>
    `
});