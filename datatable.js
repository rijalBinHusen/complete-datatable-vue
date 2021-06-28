Vue.component("datatable", {
	props: ["datanya"],
    data () {
        return {
            startRow: 0,
            lengthRow: 5,
            nowData: null,
            currentPage: 0,
            searchInput1: "",
            searchInput2: "",
            searchInput3: "",
            rowLenght: 0,
            allPages: 0,
        }
    },
    computed: {
        showRow () {
            if(this.searchInput1.length < 3 && this.searchInput2.length < 3 && this.searchInput3.length < 3) {
            
            this.rowLenght = this.datanya.length //total data length
            this.allPages = Math.ceil(this.rowLenght / this.lengthRow) //total pages

            return this.datanya.slice(this.startRow, this.startRow+Number(this.lengthRow))
            
            } else {
                let result = []
                for (let i = 0; i < this.datanya.length; i++) {

                    let condition = Boolean(this.datanya[i].dat1.includes(this.searchInput1) && 
                    this.datanya[i].dat2.includes(this.searchInput2) && 
                    this.datanya[i].dat3.includes(this.searchInput3))

                    if (condition) { //searchinput1
                        result.push(this.datanya[i])
                    }
                }
                this.rowLenght = result.length //total data length
                this.allPages = Math.ceil(this.rowLenght / this.lengthRow)  //total pages

                return result.slice(this.startRow, this.startRow+Number(this.lengthRow))
            }
        },
        totalPage () {
            if(this.allPages > 1) {
            return this.startRow == 0 || this.startRow == 1 ? 
            [1,2,3] : 
            [this.currentPage-1, this.currentPage, this.currentPage+1 > this.allPages ? 1 : this.currentPage+1]
            }
        }
    },
    methods: {
        toThePage(num) {
            this.startRow = (num-1)*this.lengthRow
            this.currentPage = num
        },
        changeRow (num) {
            this.lengthRow = num
            this.startRow = 0
            this.currentPage = 0
        }
    },
    filters : {
        searchKey : function () {

        }
    },
    template: `
    <div>
    <!-- pagination length & form -->
        <div class="row"> 
            <nav class="col">
            Show entries
                <select @change="changeRow($event.target.value)">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </nav>
            
            <!--nav class="col">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search word" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
                </div>
            </nav-->
        </div>
    <!-- End of pagination length -->

    <!-- data Table -->

        <table class="table table-hover table-bordered">
            <thead>
            <tr class="table-info">
                <th scope="col">No</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <!--search form-->
            <tr>
                <td></td>
                <td><input type="text" placeholder="search" v-model="searchInput1"></td>
                <td><input type="text" placeholder="search" v-model="searchInput2"></td>
                <td><input type="text" placeholder="search" v-model="searchInput3"></td>
            </tr>
            <!--end ofsearch form-->
            <tr v-for="(r, index) in showRow">
                <th scope="row">{{index+startRow+1}}</th>
                <td>{{r.dat1}}</td>
                <td>{{r.dat2}}</td>
                <td>{{r.dat3}}</td>
            </tr>
            </tbody>
        </table>
        
        <!--End of data Table -->

        
        <!--Pagination button and info of qty item-->
        
        <div class="row">
            <span class="col">
                <p>{{startRow+1}} - {{startRow+Number(lengthRow) < rowLenght ? startRow+Number(lengthRow) : rowLenght}} of {{rowLenght}} item</p>
            </span>
            <nav class="col" aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                <li :class="['page-item', currentPage == 0 || currentPage == 1 ? 'disabled' : '']">
                    <a class="page-link" @click="toThePage(currentPage-1)" tabindex="-1" aria-disabled="true">Previous</a>
                </li>

                <li :class="['page-item', currentPage == p || p == 1 && currentPage == 0 ? 'active' : '' ]" v-for="p in totalPage">
                    <a class="page-link" @click="toThePage(p)" href="#">{{p}}</a>
                </li>

                <li :class="['page-item', currentPage >= allPages ? 'disabled' : '']">
                    <a class="page-link" @click="toThePage(currentPage+1)" aria-disabled="true">Next</a>
                </li>
                </ul>
            </nav>
        </div>

        <!--End of pagination button and info of qty item-->

    </div>
    `
});