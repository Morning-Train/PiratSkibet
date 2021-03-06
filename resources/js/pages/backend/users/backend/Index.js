import CrudPage from "@morningtrain/react-crud/CrudPage";
import IndexTable from "@morningtrain/react-crud/layouts/index/IndexTable";
import * as Columns from "support/columns";
import * as Filters from "support/filters";
import {inject} from "@morningtrain/react-decorators";
import {router} from "@morningtrain/helpers";
import Link from "widgets/navigation/Link";

export default
@inject(['router'])
class Index extends CrudPage {

    get resourceName() {
        return 'backend.users.user';
    }

    get layout() {
        return IndexTable;
    }

    get actions() {
        return (
            <div className="table-actions">
                <Link route={'backend.users.backend.edit'} label={'Rediger'} parameters={{user:'model:id'}} />
            </div>
        );
    }

    get filters() {
        return (
            <React.Fragment>
                <Filters.Search />
                <Filters.Enum constraint={'status'} enum={'user_status'} placeholder={'Vælg status'} />
                <Filters.Enum constraint={'role'}
                              enum={'user_roles'}
                              placeholder={'Vælg rolle'}
                              only={['admin', 'mentor', 'moderator']}
                              defaultValue={['admin', 'mentor', 'moderator']} />
            </React.Fragment>
        );
    }

    get columns() {
        return (
            <React.Fragment>
                <Columns.Enum name={'role_name'} label={'Rolle'} enum={'user_roles'} />
                <Columns.Text name={'name'} label={'Navn'}/>
                <Columns.Text name={'username'} label={'Brugernavn'}/>
                <Columns.Text name={'email'}/>
            </React.Fragment>
        );
    }

    renderBeforeCrud() {
        return (
            <React.Fragment>
                <Link route={'backend.users.backend.create'} label={'Opret backend bruger'} className={'button button--yellow'} />
            </React.Fragment>
        );
    }

}
