<template>
    <div class="breadcrumbs" id="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1>{{pagetitle}}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <!-- <ol class="breadcrumb text-right">
                                    <li><a href="#">Dashboard</a></li>
                                    <li><a href="#">UI Elements</a></li>
                                    <li class="active">Buttons</li>
                                </ol> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
  export default {
    name: 'Breadcrumbs',   
    props: [
        "pagetitle"
    ],
  }
</script>

<style lang="scss" scoped>
    .right-panel{
        .breadcrumbs{
            margin-top: 15px;
            .breadcrumbs-inner{
                height: 45px;
                line-height: 45px;
                .page-header{
                    background: none;
                    h1{
                        padding: 0;
                        line-height: 45px;
                    }
                }
            }
        }
    }
</style>
