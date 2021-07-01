# complete-datatable-vue
complete datatable base on vuejs and bootstrap for css.

finally after so long i'm stuck to make an app because of showing data in a table,
i can complete this component, and then i push to github so every can reuse this component for their app, event their not use vuejs as main framework.

so... if you want to use this component, just grab the datatable.js to your project and then call the component as follows below :
<!-- call the vuejs frame work and bootstrap (you dont need to add this when your project use that framework too) -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
 >
<!-- call the vuejs frame work and bootstrap (you dont need to add this when your project use that framework too) -->

<!--Call the component-->
<datatable 
  :heads="heads" <br>
  :datanya="data1" 
  :option="['edit', 'delete', 'detail']" 
  :keydata="'id'" 
  @edit="show($event)" 
  @delete="show($event)" 
  @detail="show($event)" 
 >

</datatable>

<!--Call the component-->

information :

:heads = should be array and contain the key of your object and also used as the head of data table like ['id', 'name', 'lastName']

:datanya = sould be array of object that you want to show in table like 
[ 
  {'id': '001', 'name':'rijal', 'lastName':'bin Husen'},  
  {'id': '001', 'name':'husen', 'lastName':'abu rijal'}
]

:option = is optional when you want the edit, delete, detail for your data, if you wouldnt any option in the table, just give [] parameter

:keydata = is your key of your data and also will be return when user hit the edit, detail, delete button

@edit = is event when user hit edit button and sure you can replace with your own function
@delete = this is event when user hit delete button and sure you can replace with your own function
@detail = this is event when user hit detail button and sure you can replace with your own function
