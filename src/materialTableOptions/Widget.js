
import {   AddBox , Delete , Edit, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumnOutlined , Add} from '@mui/icons-material';
import React, { forwardRef } from 'react'
// import AddIcon from '../icons/Add.svg'
// import DeleteIcon from '../icons/Delete.svg'
// import ModifyIcon from '../icons/Edit.svg'


/* Default SVG TABLE Icon Ref */
export const tableIcons = {
    Add:  forwardRef((props, ref) => <Add {...props} ref={ref} />),
    Check:  forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <Delete  {...props} ref={ref} />),
    DetailPanel:  forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit:  forwardRef((props, ref) => <Edit  {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck:  forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumnOutlined {...props} ref={ref} />)
};

// tableIcons.Add.displayName="AddIcon"
// tableIcons.Check.displayName="CheckIcon"
// tableIcons.Clear.displayName="clearIcon"
// tableIcons.Delete.displayName="deleteIcon"
// tableIcons.DetailPanel.displayName="deleteIcon"
// tableIcons.Edit.displayName="editIcon"
// tableIcons.Export.displayName="editIcon"
// tableIcons.Filter.displayName="FilterIcon"
// tableIcons.FirstPage.displayName="FirstPageIcon"
// tableIcons.LastPage.displayName="editIcon"
// tableIcons.NextPage.displayName="editIcon"
// tableIcons.PreviousPage.displayName="editIcon"
// tableIcons.ResetSearch.displayName="editIcon"
// tableIcons.Search.displayName="editIcon"
// tableIcons.SortArrow.displayName="editIcon"
// tableIcons.ThirdStateCheck.displayName="editIcon"
// tableIcons.ViewColumn.displayName="editIcon"

/* Default lang for table component */
export const tableLang = {
    body: {
        emptyDataSourceMessage: "Pas d'enregistrement ?? afficher",
        addTooltip: 'Ajouter',
        deleteTooltip: 'Supprimer',
        editTooltip: 'Editer',
        filterRow: {
            filterTooltip: 'Filtrer'
        },
        editRow: {
            deleteText: 'Voulez-vous supprimer cette ligne?',
            cancelTooltip: 'Annuler',
            saveTooltip: 'Enregistrer'
        }
    },
    grouping: {
        placeholder: "Grouper les donn??es en tirant l'entete  ...",
        groupedBy: 'Grouper par:'
    },
    header: {
        actions: 'Actions'
    },
    pagination: {
        labelDisplayedRows: '{from}-{to} de {count}',
        labelRowsSelect: 'lignes',
        labelRowsPerPage: 'lignes par page:',
        firstAriaLabel: 'Premi??re page',
        firstTooltip: 'Premi??re page',
        previousAriaLabel: 'Page pr??c??dente',
        previousTooltip: 'Page pr??c??dente',
        nextAriaLabel: 'Page suivante',
        nextTooltip: 'Page suivante',
        lastAriaLabel: 'Derni??re page',
        lastTooltip: 'Derni??re page'
    },
    toolbar: {
        addRemoveColumns: 'Ajouter ou supprimer des colonnes',
        nRowsSelected: '{0} ligne(s) s??lection??e(s)',
        showColumnsTitle: 'Voir les colonnes',
        showColumnsAriaLabel: 'Voir les colonnes',
        exportTitle: 'Exporter',
        exportAriaLabel: 'Exporter',
        exportName: 'Exporter en CSV',
        searchTooltip: 'Chercher',
        searchPlaceholder: 'Chercher'
    }
}





