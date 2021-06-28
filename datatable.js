Vue.component("datatable", {
	props: ["datanya"],
    data () {
        return {
            currentPage: 0,
            lengthRow: 5,
            nowData: null
        }
    },
    computed: {
        paginate () {
            return this.datanya.slice(this.currentPage, this.lengthRow)
            // console.log(this.datanya.slice(this.currentPage, this.lengthRow))
        }
    },
    template: `
    <div>
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
    </div>
    `
});