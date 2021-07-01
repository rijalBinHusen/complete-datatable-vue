# complete-datatable-vue

Complete datatable base on vuejs and bootstrap for css.

Finally after so long i'm stuck to make an app because of showing data in a table, i can complete create this component, and then i push to github so everyone can reuse this component for their app, event their not use vuejs as main framework.

## Getting Started

Just grab the file [datatable.js](https://github.com/rijalBinHusen/complete-datatable-vue/blob/master/datatable.js) to your project and then edit file where you want use the datatable as follows below.

### Link js and css file

The first you should do is call the vuejs frame work and bootstrap (you dont need to add this when your project use that framework too)

```
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="/location/where/you/put/datatable.js"></script>
```

### Use the component
```
<datatable 
  :heads="heads"
  :datanya="data1" 
  :option="['edit', 'delete', 'detail']" 
  :keydata="'id'" 
  @edit="show($event)" 
  @delete="show($event)" 
  @detail="show($event)" 
 >

</datatable>
```

### Information :

```
:heads = should be an array the key of your object and also used as the head of data table like ['id', 'name', 'lastName']

:datanya = sould be array of object that you want to show in datatable like 
[ 
  {'id': '001', 'name':'rijal', 'lastName':'bin Husen'},  
  {'id': '002', 'name':'husen', 'lastName':'abu rijal'}
]

:option = this is optional when you want the 'edit', 'delete', 'detail' button in the table. Just give [] parameter if you dont need any button.

:keydata = the primary key of object, in this case the keydata is 'id' and also will be return when user hit the edit, detail, delete button.

@edit = is event when user hit edit button and sure you can replace with your own function in the colon like doThis($event)
@delete = this is event when user hit delete button and sure you can replace with your own function in the colon like doThis($event)
@detail = this is event when user hit detail button and sure you can replace with your own function in the colon like doThis($event)

$event = is contain string, in this case the $event will be contain id (001 or 002)
```
