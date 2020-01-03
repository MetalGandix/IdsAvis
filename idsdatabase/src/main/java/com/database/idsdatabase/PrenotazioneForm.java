package com.database.idsdatabase;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity

public class PrenotazioneForm{

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private String centro;

    private String compleanno;

    private String telefono;

    private String statosalute;

    private String note;

    public String getcentro() {
        return centro;
    }
    
    public void setcentro(final String centro) {
        this.centro = centro;
    }

    public String getcompleanno() {
        return compleanno;
    }
    
    public void setcompleanno(final String compleanno) {
        this.compleanno = compleanno;
    }

    public String gettelefono() {
        return telefono;
    }
    
    public void settelefono(final String telefono) {
        this.telefono = telefono;
    }

    public String getnote() {
        return note;
    }
    
    public void setnote(final String note) {
        this.note = note;
    }

    
    public String getstatosalute() {
        return statosalute;
    }
    
    public void setstatosalute(final String statosalute) {
        this.statosalute = statosalute;
    }

    @ManyToOne
    private Donazione data;

    public Donazione getdata(){
		return data;
	}

	public void setdata(Donazione data){
		this.data = data;
    }
    
    @ManyToOne
    private Donazione ora;

    public Donazione getora(){
		return ora;
	}

	public void setora(Donazione ora){
		this.ora = ora;
    }

    @Override
	public String toString(){
        return "" + centro + "" + compleanno + "" + telefono + "" + statosalute + "" + note + "" + ora.getid() + "" + ora.getora() + "" + data.getid() + "" + data.getdata();
        
    }

    


}