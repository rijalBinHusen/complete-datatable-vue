Vue.component("datatable", {
	props: ["datanya", "heads"],
    data () {
        return {
            startRow: 0,
            lengthRow: 5,
            nowData: null,
            currentPage: 0,
            searchInput: [],
            searchKey: [],
            rowLenght: 0,
            allPages: 0,
            sortAsc: true
        }
    },
    computed: {
        showRow () {

            // if(this.searchInput1.length < 3 && this.searchInput2.length < 3 && this.searchInput3.length < 3) {
            if(this.searchInput.length < 1) {
            
            this.rowLenght = this.datanya.length //total data length
            this.allPages = Math.ceil(this.rowLenght / this.lengthRow) //total pages

            return this.datanya.slice(this.startRow, this.startRow+Number(this.lengthRow))
            
            } else {
                let result = []
                this.datanya.filter( (val) => {

                    condition = []

                    this.searchKey.map( (key, index) => {
                        if (val[key].toLowerCase().includes(this.searchInput[index].toLowerCase())) {
                            condition.push(true)
                        }
                        else {
                            condition.push(false)
                        }
                    })

                    if(!condition.includes(false)) {
                        result.push(val)
                    }
                })

                this.rowLenght = result.length //total data length
                this.allPages = Math.ceil(this.rowLenght / this.lengthRow)  //total pages

                return result.slice(this.startRow, this.startRow+Number(this.lengthRow))
            }
        },
        totalPage () {
            if(this.allPages > 1) {
            return this.startRow == 1 || this.startRow == 0 ? 
            this.allPages > 2 ? [1,2,3] : [1,2] : //pages more than 2 or not
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
        }, sortDedata (sortKey, sortAsc) {
            if (sortKey) {
                this.datanya.sort(function (a, b) {
                    let x = a[sortKey].toLowerCase()
                    let y = b[sortKey].toLowerCase()
                    if(sortAsc) {
                        if (x < y) { return -1 }
                        if (x > y) { return 1 }
                    } else {
                        if (x > y) { return -1 }
                        if (x < y) { return 1 }
                    }
                    return 0
                })
            }
        },
        tulisanBaku (str) { //to make inClock becomae In Clock
            let hasil;
        
            let res = str.replace(/([A-Z])/g,' $1'); //insert space before middle capital letter
            hasil = res[0].toUpperCase()
            hasil += res.slice(1)
        
            return hasil
        },
        searchWord (val, key) {
            if (val) {
                if (this.searchKey.includes(key)) {
                    let position = this.searchKey.indexOf(key) //find the position of key
                    this.searchInput.splice(position, 1) //delete him
                    this.searchInput.splice(position, 0, val) //insert the new key word
                } else {
                    this.searchInput.push(val); 
                    this.searchKey.push(key); 
                }
            } else {
                this.searchInput = []
                this.searchKey = [] 
            }
            this.startRow = 0; 
            this.currentPage = 0
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
                <th v-for="head in heads" @click="sortDedata(head, sortAsc); sortAsc = !sortAsc" scope="col">{{tulisanBaku(head)}}</th>
            </tr>
            </thead>
            <tbody>
            <!--search form-->
            <tr>
                <td></td>
                <!--td><input type="text" class="form-control" placeholder="Search" @change="searchInput.push($event.target.value); searchKey.push('name'); startRow = 0; currentPage = 0"></td>
                <td><input type="text" class="form-control" placeholder="Search" @change="searchInput2 = $event.target.value; startRow = 0; currentPage = 0"></td>
                <td><input type="text" class="form-control" placeholder="Search" @change="searchInput3 = $event.target.value; startRow = 0; currentPage = 0"></td-->
                <td v-for="key in heads">
                    <input type="text" 
                    class="form-control" 
                    placeholder="Search" 
                    @change="searchWord($event.target.value, key)">
                </td>
            </tr>
            <!--end ofsearch form-->
            <tr v-for="(r, index) in showRow">
                <th scope="row">{{index+startRow+1}}</th>
                <td v-for="key in heads">{{r[key]}}</td>
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
                    <a class="page-link" @click="toThePage(currentPage-1)" aria-disabled="true">Previous</a>
                </li>

                <li :class="['page-item', currentPage == p || p == 1 && currentPage == 0 ? 'active' : '' ]" v-for="p in totalPage">
                    <a class="page-link" @click="toThePage(p)" href="#">{{p}}</a>
                </li>

                <li :class="['page-item', startRow+Number(lengthRow) >= rowLenght ? 'disabled' : '']">
                    <a class="page-link" @click="toThePage(currentPage == 0 ? 2 : currentPage+1)" aria-disabled="true">Next</a>
                </li>
                </ul>
            </nav>
        </div>

        <!--End of pagination button and info of qty item-->

    </div>
    `
});