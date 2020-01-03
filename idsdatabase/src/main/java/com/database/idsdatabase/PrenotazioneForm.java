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
    private long id;

    private String centro;

    private String compleanno;

    private String telefono;

    private String statosalute;

    private String note;

    private String donazioneEmergenza;
    
    public PrenotazioneForm(){

    }

    public PrenotazioneForm(final long id, final String centro, final String compleanno, final String telefono, final String statosalute, final String note, final String donazioneEmergenza){
        this.id = id;
        this.centro = centro;
        this.compleanno = compleanno;
        this.telefono = telefono;
        this.statosalute = statosalute;
        this.note = note;
        this.donazioneEmergenza = donazioneEmergenza;
    }

    public long getid() {
  return id;
 }

 public void setid(final Long id) {
  this.id = id;
 }

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

    public String getdonazioneEmergenza() {
  return donazioneEmergenza;
 }

 public void setdonazioneEmergenza(final String donazioneEmergenza) {
  this.donazioneEmergenza = donazioneEmergenza;
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
        return "" + id + "" + centro + "" + compleanno + "" + telefono + "" + statosalute + "" + note + "" + donazioneEmergenza + "" + ora.getid() + "" + ora.getora() + "" + data.getid() + "" + data.getdata();
        
    }

    


}