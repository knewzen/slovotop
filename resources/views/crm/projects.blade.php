@extends('crm.layout.master')

@section('title')
    @lang('data.titleProject') - {{ Auth::user()->name }}
@endsection()

@section('HeadTitle')
    <div class="ui-fnt bold size-5 ui-color col-green">
        @lang('data.titleProject')
    </div>
@endsection()

@section('content')

    <admin-projects user_id="{{ \Auth::id() }}" v-cloak></admin-projects>

@endsection()